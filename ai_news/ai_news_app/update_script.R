source("app.R")

# Fetch and save datasets
saveRDS(get_oecd_ai_legislation(), "data/legal.rds")
saveRDS(get_rss_articles(feeds$Social), "data/social.rds")
saveRDS(get_rss_articles(feeds$Academic), "data/academic.rds")
