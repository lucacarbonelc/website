---
authors:
- admin
date: "2020-06-24T00:00:00Z"
lastmod: [":fileModTime", ":default"]
doi: ""
featured: false
image:
  caption: ""
  focal_point: ""
  preview_only: false
projects: [culture&cognition]
publication: ""
publication_short: ""
publication_types: ["0"]
publishDate: ""
slides: ""
summary: How to match the words of a song with the chords in which these words are sung.
tags:
title: Functions to match chords with lyrics in the R package chorrrds
url_code: ""
url_dataset: ""
url_pdf: ""
url_poster: ""
url_project: ""
url_slides: ""
url_source: ""
url_video: ""
---

# Intro
One of my PhD projects investigates the impact that songs have on meritocratic beliefs and social inequalities. One of the things that I would like to explore is the potential impact that certain words have when sung in a specific chord. This idea comes from the well-know effect that music (in terms of sounds) has on emotions (Arjmand, Hohagen, Paton, & Rickard 2014) and from the consideration that beliefs are intrinsically multi-sensory. That is, when asking people about their beliefs, the question inevitabily taps the perceptual information that has been encoded and stored during previous experiences. But this is another story.

While thinking through the theoretical aspects, I also spent sometime working the first lines of code to get the data aligned with the way I was thinking. In this process, I encountered the R package [`chorrrds`](https://r-music.rbind.io/posts/2018-08-19-chords-analysis-with-the-chorrrds-package/), built to extract chords from the website [Cifraclub](https://www.cifraclub.com.br). Building upon the functions of this package, I implemented two functions that allow to match the words of a song with the corresponding chords in which these words are sung. In this blog post, I will explain the features of these two functions and how to use them in a practical example.

# Preliminaries
The package `chorrrds` can be installed from CRAN, with

```{r}
install.packages("chorrrds")
```

and for the latest version, from GitHub with:

```{r}
# install.packages("devtools")
devtools::install_github("r-music/chorrrds")
```

# Function 1: create_dat
Generally, this is how a song looks on the internet (specifically, on Cifraclub):

{{< figure library="true" src="chorrrds1.jpg" title="Sweet Life by Frank Ocean" lightbox="true" >}}
Source: [Cifraclub](https://www.cifraclub.com.br/frank-ocean/sweet-life/)

As you can see, each verse is sung with one or more chords. The problem is how to match each word with the corresponding chord in which they are played. For example, in the first verse, "The best song wasn't the single, but you weren't either", the words "The best song wasn't" are played in A, "the single, but you weren't" are played in C, and "either" is in G. How to connect each of these words with the corresponding chords A, C, G? The first step consists of having a song divided by verse, both for the chords and the lyrics, something that is achieved with the function `create_dat`:
```{r}
chords.dat <- create_dat("Frank Ocean", "Sweet Life")
```

This produces the following output: {{< figure library="true" src="output1.jpg" title="Chords and lyrics by verse for Sweet Life by Frank Ocean" lightbox="true" >}}

# Function 2: create_net
While `create_dat` allows to have a song as presented on the website, it still does not achieve the intended result. That is, it does not match words with the respective chords. `create_net` does the job. The idea is to search for each chord the beginning of the closest word, and to store all the words that are present before the end of the verse or the beginning of the next chord. Running:
```{r}
create_net(chords.dat)
```

creates the intended output: {{< figure library="true" src="output2.jpg" title="Matching chords and lyrics for Sweet Life by Frank Ocean" lightbox="true" >}}

Note that `create_net` builds upon the structure created with `create_dat`.

A special thanks to [Bruna Wundervald](https://github.com/brunaw), the developer of the `chorrrds` package, for the help and for the inclusion of these functions in her package :)


P.S. I am not a programmer, so (1) the code looks bad, and (2) it might have issues. So, if you encounter any problem with the functions, want to give suggestions about how to improve the code, or just want to rant about stuff, drop me a line! I'll be happy to further break my head around it.

**Bibliography**
Arjmand, H.-A., Hohagen, J., Paton, B., & Rickard, N. S. (2017). Emotional Responses to Music: Shifts in Frontal Brain Asymmetry Mark Periods of Musical Change. Frontiers in Psychology, 8. https://doi.org/10.3389/fpsyg.2017.02044