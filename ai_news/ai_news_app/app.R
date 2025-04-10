library(shiny)
library(tidyverse)
library(xml2)
library(rvest)
library(DT)

# ---- Data scraping functions ----

get_oecd_ai_legislation <- function() {
  page <- read_html("https://oecd.ai/en/")
  
  # Extracting policy-related sections (adjust selectors as needed)
  titles <- page %>% html_elements("h3") %>% html_text(trim = TRUE)  # Example: policy titles
  links <- page %>% html_elements("a") %>% html_attr("href")
  relevant_links <- links[grepl("policy|law|regulation", links, ignore.case = TRUE)]  # Filter relevant links
  
  tibble(
    Title = titles,
    Link = relevant_links
  ) %>% head(10)
}

get_rss_articles <- function(url) {
  feed <- xml2::read_xml(url)
  titles <- xml_text(xml_find_all(feed, "//item/title"))
  links <- xml_text(xml_find_all(feed, "//item/link"))
  descs <- xml_text(xml_find_all(feed, "//item/description"))
  
  # Simple summarization (1st sentence)
  summaries <- str_extract(descs, "^[^.]+\\.")
  
  tibble(
    Title = titles,
    Summary = summaries,
    Link = links
  ) %>% slice(1:10)
}

# Feeds
feeds <- list(
  Social = "https://news.google.com/rss/search?q=AI+society&hl=en-US&gl=US&ceid=US:en",
  Academic = "http://export.arxiv.org/rss/cs.AI"
)

# ---- UI ----
ui <- fluidPage(
  titlePanel("🧠 Daily AI News Digest"),
  
  tabsetPanel(
    tabPanel("Legal",
             DTOutput("legal_table")
    ),
    tabPanel("Social",
             DTOutput("social_table")
    ),
    tabPanel("Academic",
             DTOutput("academic_table")
    )
  )
)

# ---- Server ----
server <- function(input, output, session) {
  
  output$legal_table <- renderDT({
    data <- get_oecd_ai_legislation()
    datatable(data, escape = FALSE, options = list(pageLength = 5))
  })
  
  output$social_table <- renderDT({
    data <- get_rss_articles(feeds$Social)
    datatable(data, escape = FALSE, options = list(pageLength = 5))
  })
  
  output$academic_table <- renderDT({
    data <- get_rss_articles(feeds$Academic)
    datatable(data, escape = FALSE, options = list(pageLength = 5))
  })
}

shinyApp(ui, server)