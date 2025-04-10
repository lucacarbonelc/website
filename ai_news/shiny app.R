library(rsconnect)

rsconnect::setAccountInfo(name='luca-carbone',
                          token='8E1A67400E93E761DF6DC021EE725371',
                          secret='nGSWaU3V+v1gETLcVtzpJ95hd21eEr+WY+7+sSc/')

rsconnect::deployApp('./ai_news/ai_news_app')