---
title: Performance Thresholds
date: '2015-05-01T22:12:03.284Z'
---

The following are thresholds that I believe should be measured and analyzed against before a deploy can occur. The values will differ from application to application, but the important part is the act of maintaining a threshold in the first place. If you're measuring it, you'll know if something goes wrong.

1. Average blocking time of each page should be no more than X ms
2. P99 blocking time of each page should be no more than X ms
3. Average wait time of each page should be no more than X ms.
4. P99 load time of each page should be no more than X ms.
5. Average load time of each page should be no more than X ms.
6. P99 wait time of each page should be no more than X ms.
7. Server memory should never exceed X% active utilization.
8. CPU utilization should not exceed X%.
9. Retained server memory should not exceed X GB after up to Y hours of on-time.
10. Retained server memory should not exceed X GB after up to Y week of on-time.


#### Notes:
- **Blocking time** is defined as the amount of time that the _server_ spends actively processing a request from end-to-end, as seen in Chrome's Inspect tab. It excludes wait time and garbage collection.
- **Wait time** is defined as the total amount of time that the _client_ spends from sending a request to receiving its first byte in response, as seen from Chrome's Network tab.
- **Load time** is defined as the time until the `load` event occurs on the client, as seen from Chrome's Network tab.
- **Average** is defined by by refreshing each page three times, with gaps in between, and averaging the metric observed over those three trials.
- **P99** is defined as the 99th best percentile (ie. the 1% worst).
- Blocking and wait time should only be analyzed after sending at least 5 requests to a new server beforehand, and letting them complete fully, to warm it up.
- **CPU utilization** is defined as the percentage of CPU resources in active use during normal traffic.
- **Retained server memory** is defined as the amount of active memory utilization after 5 minutes of no traffic.
- **On-time** is defined as the amount of time since the last server restart.