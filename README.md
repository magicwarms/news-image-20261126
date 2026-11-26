# news-image-20261126

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/magicwarms/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/magicwarms/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A one-page front page of the world's news on Thursday 26 November 2026: 30 stories from eight regions, each one an event of 26 November or first reported that day in its own time zone. The three leads are the storm that grounded New York's 100th Thanksgiving parade, Kim Jong Un's call for wider use of tactical nuclear weapons, and the EU's special summit on its budget and Ukraine. Ten drawn scenes follow, then a world map, 17 shorter stories, the day's timeline in UTC and a date check that names the 25 November stories it left out. Each story says how sure it is (confirmed, official, state media, reported or scheduled) and names its sources.

Every picture is drawn in SVG; there are no photographs. `poster/poster.html` lays the page out, `poster/render.mjs` renders it with headless Chrome and ffmpeg, and `main.ts` copies the committed `entry.png` to the output folder.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=behh0318&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
