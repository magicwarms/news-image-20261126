# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/magicwarms/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/magicwarms/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A one-page front page of the world's news on Thursday 26 November 2026: 35 stories from six continents, each checked against two or more outlets. The lead is the new US tariffs on 14 trade partners. Below it are Ukraine's strike on Savasleyka air base and drawn scenes for Hormuz, Cairo, the postponed Macy's parade, Kim Jong Un's nuclear push, the Netanyahu case and Hera's look at the DART crater. A hand-drawn world map pins them, and region lists carry the rest. `poster/poster.html` lays it out, `poster/render.mjs` renders it with headless Chrome and ffmpeg, and `main.ts` copies the committed `entry.png` to the output folder. The two photos are AI-made illustrations; everything else is drawn in HTML and SVG.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=behh0318&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
