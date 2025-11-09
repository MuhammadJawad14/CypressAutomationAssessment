# 🌐 Cross-Browser Testing Matrix 

| Browser                    | OS                  | Test Suite Level               | Known Gaps / Notes                                              |
|                            |                     |                                     |                                                          |
| **Chrome (latest)**        | Windows/macOS       | **Full Suite** (Manual & Automated) | Baseline browser; all functional flows executed including Board/Card CRUD, drag-drop, RBAC checks, tenant isolation, audit verification, and session persistence; automation scripts validated and reliable selectors confirmed. |

| **Firefox (latest)**       | Windows/macOS       | **Full Suite** (Manual & Automated) | Full suite executed; minor UI differences observed in input fields and column widths; potential drag-drop issues with custom implementation; workaround: keyboard movement or API validation.                                       |

| **Safari (latest)**        | macOS               | **Smoke Only**                      | Core actions verified: Login, Create/Rename/Archive Board, View Boards, Viewer restrictions; drag-drop requires manual validation; CSS/layout quirks may appear; automation limited due to WebDriver constraints.             |

| **Mobile Chrome (latest)** | Android (simulated) | **Smoke Only**                      | Focus on touch responsiveness, viewport scaling, Login, Create Card; drag-drop gestures tested with touch events; full suite not feasible due to mobile constraints; check scrolling and UI alignment.                      |

| **Mobile Safari (latest)** | iOS (simulated)     | **Smoke Only**                      | Core actions: Login, Create Board/Card, scroll behavior, essential UI elements accessibility; drag-drop requires manual validation; minor layout/rendering differences expected; touch gestures tested via simulation.       |
