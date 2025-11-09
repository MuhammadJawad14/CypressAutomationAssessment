# 🧭 Exploratory Testing Charters (Compressed Format)

## Charter 1: Validate Tenant Isolation & RBAC Across Boards & Cards

| Attribute            | Detail                                                                                                                     |
|                      |                                                                                                                            |
| **Goal**             | Stress-test multi-tenant boundaries and RBAC to ensure proper data segregation, permission enforcement, and audit logging. |
| **Actors**           | Admin (Tenant A), Member (Tenant A), Viewer (Tenant B)                                                                     |
| **Duration**         | 60–75 minutes                                                                                                              |

| **Heuristics**       | SFDIPOT: Security (Auth/RBAC/tenant isolation), Function (CRUD), Data integrity (Tenant IDs), Platform (Web/Mobile). CRUD/Negative Testing: Attempt all operations (Create, Read, Update, Delete) from unauthorized tenants/roles; test boundary values. Audit checks: Validate that all actions generate proper log entries.               |

| **Key Actions**      | 1. Log in as Member (Tenant A) → Create Board & add Cards. 2. Log in as Viewer (Tenant B) → Attempt to read Boards/Cards from Tenant A. 3. Log in as Admin (Tenant A) → Attempt to PATCH/DELETE a Card owned by Member (Tenant A). 4. Log in as Viewer (Tenant A) → Attempt to DELETE a Board or edit Cards. 5. Switch between sessions rapidly (Member A → Viewer B) → Observe for session/data leakage. 6. Attempt to create Board/Card with invalid/overlength names → Validate error messages. 7. Verify audit entries exist for successful and failed attempts. |

| **Success Metrics**  | No cross-tenant data is visible; unauthorized actions consistently result in 403 Forbidden or disabled UI; Board/Card validations prevent invalid inputs; audit logs accurately capture user actions (create/update/delete, tenantId, userId, timestamp). |

 

## Charter 2: Cross-Browser Sanity: Create/Rename/Archive Board; Drag-Drop Card

| Attribute           | Detail |
|                     |        |
| **Goal**            | Verify core user workflows function correctly across required browsers (Chrome, Firefox, Safari) and mobile browsers (Chrome/Safari), including complex UI interactions like drag-and-drop and touch gestures. |

| **Actors**          | Member (Tenant A) |
| **Duration**        | 45–60 minutes |
| **Heuristics**      | SFDIPOT: Function (UI workflows), Platform (Cross-browser & responsive), Data (Board/Card integrity). All-Pairs/Interaction: Combine board actions (create, rename, archive) with card actions (create, drag-drop, delete). Negative/Edge cases: Validate overlength names, empty fields, invalid drag operations. |

| **Key Actions**     | 1. Chrome: Login → Create Board → Add 3 Cards → Drag Cards between columns → Rename Board → Archive Board. 2. Firefox: Repeat Chrome workflow focusing on layout/input behavior. 3. Safari: Smoke test login, create Board, add a Card, rename Board. 4. Mobile Chrome/Safari: Login → Create Board → Add Card → Drag/drop via long-press/touch → Rename Board. 5. Validate error messages for invalid actions. 6. Observe UI responsiveness, scroll behavior, visual consistency. |

| **Success Metrics** | All Board/Card workflows complete successfully; drag-and-drop and touch interactions work; no data loss or unresponsive UI; validation errors correctly shown; cross-browser consistency maintained for layouts, inputs, workflows. |

 

## Charter 3 (Optional / Bonus): Audit & Performance Smoke Exploration

| Attribute           | Detail                                                                                                                  |
|                     |                                                                                                                         |
| **Goal**            | Explore backend and front-end logging, system performance under small-scale load, and audit consistency.                |
| **Actors**          | Admin, Member                                                                                                           |
| **Duration**        | 30–45 minutes                                                                                                           |
| **Heuristics**      | SFDIPOT: Security (audit logs), Function (API behavior), Platform (response times). Performance/Load: Simulate multiple rapid Board/Card actions; check audit and response latency.                                                                                                      |

| **Key Actions**     | 1. Perform multiple Board/Card CRUD operations in quick succession. 2. Verify audit entries exist for each action with correct userId, tenantId, timestamp. 3. Measure API response times for GET /boards, POST /cards (<500ms). 4. Attempt invalid entries → verify validation + audit entries. |

| **Success Metrics** | All actions generate correct audit logs; API response times meet thresholds; invalid actions blocked and errors logged; no inconsistencies in multi-user scenario.  |
