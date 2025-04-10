# AI News Digest Shiny App

This Shiny app aggregates and displays daily news about AI from trusted sources. It has three main tabs:
- **Legal**: Global AI regulations from the OECD AI Policy Dashboard
- **Social**: AI ethics and social implications from Google News
- **Academic**: Latest academic papers from arXiv (CS.AI category)

## Running the App

To run the app locally:
1. Clone this repo to your local machine
2. Install required R packages:
   ```r
   install.packages(c("shiny", "tidyverse", "xml2", "rvest", "DT"))
   ```
3. Run the app.R file using RStudio or R.