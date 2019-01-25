---
title: Performance Thresholds
date: '2015-05-01T22:12:03.284Z'
---

The following thresholds must be met in order to deploy:

1. Average blocking time of each page should be no more than 500ms.
2. P99 blocking time of each page should be no more than 1000ms.
3. Average wait time of each page should be no more than 2000ms.
4. P99 wait time of each page should be no more than 3000ms.
5. Server memory should never exceed 90% active utilization.
6. CPU utilization should not exceed 50%.
7. Retained server memory should not exceed 1GB after up to 72 hours of on-time.
8. Retained server memory should not exceed 2GB after up to 1 week of on-time.

> Notes:

- **Blocking time** is defined as the amount of time that the _server_ spends actively processing a request from end-to-end, as seen in Chrome's Inspect tab. It excludes wait time and garbage collection.
- **Wait time** is defined as the total amount of time that the _client_ spends from sending a request to receiving its first byte in response, as seen from Chrome's Network tab.
- **Average** is defined by by refreshing each page three times, with gaps in between, and averaging the metric observed over those three trials.
- **P99** is defined as the 99th worst percentile.
- Blocking and wait time should only be analyzed after sending at least 5 requests to a new server beforehand, and letting them complete fully, to warm it up.
- **CPU utilization** is defined as the percentage of CPU resources in active use during normal traffic, as seen in Grafana.
- **Retained server memory** is defined as the amount of active memory utilization after 5 minutes of no traffic, as seen in Grafana.
- **On-time** is defined as the amount of time since the last server restart.