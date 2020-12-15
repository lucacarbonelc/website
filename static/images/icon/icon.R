library(hexSticker)
library(lattice)
library(viridis)

# Song --------------------------------------------------------------------

song <- geniusr::get_lyrics_url("https://genius.com/Wu-tang-clan-cream-lyrics")

# Get sentiments ----------------------------------------------------------

sentiments <- openxlsx::read.xlsx("sentiwords.xlsx")
colnames(sentiments) <- c("word", "senti")
sentiments$word <- as.character(sentiments$word)
sentiments$pos <- sub(".*#", "", sentiments$word)
sentiments$word <- sub("#.*", "", sentiments$word)
sentiments <- sentiments[!duplicated(sentiments$word),]

# Clean lyrics ------------------------------------------------------------

# punctuation
song$line <- gsub('[[:punct:] ]+',' ', song$line) %>% tolower()

# check white spaces
song$line <- str_replace(gsub("\\s+", " ", str_trim(song$line)), "B", "b")
song <- song[song$line != "",]

# Build network -----------------------------------------------------------

network <- as.data.frame(matrix(nrow = stringr::str_count(paste0(song$line, collapse = " "), " "), # number of words in the song
                                ncol = 2))
colnames(network) <- c("lyrics", "edge_verse")

for (i in 1:nrow(song)) {                               # verses
  for (j in 1:stringr::str_count(song[i,1], "\\w+")) {  # words
    
    network[ match(as.numeric(do.call(paste0, expand.grid(i,j))),
                   sort(as.numeric(do.call(paste0, expand.grid(1:nrow(song), 1:max(apply(song, 1, function(x) stringr::str_count(x[1], "\\w+")))))))), 1] <- stringr::word(song[i, 1], j)
    network[ match(as.numeric(do.call(paste0, expand.grid(i,j))),
                   sort(as.numeric(do.call(paste0, expand.grid(1:nrow(song), 1:max(apply(song, 1, function(x) stringr::str_count(x[1], "\\w+")))))))), 2] <- i
    
  }
}

network <- network %>% drop_na("lyrics")

# edgelist
edgelist <- network %>% 
  inner_join(., select(., edge_verse, lyrics), by = "edge_verse") %>% 
  select(-one_of("edge_verse")) %>% 
  filter(lyrics.y != lyrics.x) %>%
  as.matrix()

# network
net <- network::network(edgelist, matrix.type = "edgelist", directed = FALSE, loops = FALSE)


# Assign attributes -------------------------------------------------------

value <- NA
for(i in 1:length(get.vertex.attribute(net, "vertex.names"))){
  ifelse((get.vertex.attribute(net, "vertex.names")[i] %in% sentiments$word),
         value[i] <- sentiments$senti[which(sentiments$word %in% get.vertex.attribute(net, "vertex.names")[i])],
         value[i] <- 0)
}

net %v% "senti" <- value
net %v% "betweenness" <- sna::betweenness(net)
net %v% "senti_group" <- ifelse(get.vertex.attribute(net, "senti") > 0,
                                "pos",
                                "neg")

# Plot --------------------------------------------------------------------

set.seed(1234)
bwplot <- GGally::ggnet2(net,
                         mode = "kamadakawai",
                         edge.size = 0.005,
                         node.label = TRUE,
                         node.size = 0,
                         node.color = "#E68731",
                         label.size = ifelse((seq(1:length(net$val)) %in% which(get.vertex.attribute(net, "senti") <= -0.2)), 1.2,
                                             ifelse((seq(1:length(net$val)) %in% which(get.vertex.attribute(net, "senti") >= 0.6)), 1.2, 0.7)),
                         label.color = ifelse((seq(1:length(net$val)) %in% which(get.vertex.attribute(net, "senti") <= -0.2)), "#450D53",
                                              ifelse((seq(1:length(net$val)) %in% which(get.vertex.attribute(net, "senti") >= 0.6)), "#21908C", "#FDE825")),
)

# Sticker -----------------------------------------------------------------

bwplot <- bwplot + theme_void() + theme_transparent()
sticker(bwplot, package="", s_x=1.05, s_y=1, s_width=1.6, s_height=1.6,
        h_fill="#E68731", h_color="#FEF5B4", filename="../icon.png", dpi = 900
        )
