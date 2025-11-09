# 🚀 Postman Collection Documentation: Boards & Cards API

## Purpose
This Postman Collection is designed to **verify functional workflows and enforce security controls** across the `/api/v1/boards` and `/api/v1/cards` endpoints.  
The primary objectives include:
- Confirming **multi-tenant data isolation**
- Validating **RBAC enforcement** for Admin / Member / Viewer roles
- Ensuring **correct request/response structure and field validation**
- Detecting any **inconsistencies between UI and API behavior**

The collection chains requests together to simulate realistic usage patterns while allowing repeatable execution.

   

## Environment Setup

### Required Environment Variables
| Variable                           | Example Value              | Purpose                     |
|                                    |                            |                             |
| `baseUrl`                          | `https://api.saas-app.com` | Root API host               |
| `admin_email` / `admin_password`   |   `admin@tenantA.com`      | Used to authenticate Admin  |
| `member_email` / `member_password` | `user@tenantA.com`         | Used to authenticate Member |
| `viewer_email` / `viewer_password` | `viewer@tenantB.com`       | Used to authenticate Viewer |

### Auto-Populated Variables (via Scripts)
| Variable                                               | Meaning                                            |
|                                                        |                                                    |
| `admin_token`, `member_token`, `viewer_token`          | Auth tokens for respective users                   |
| `admin_tenantId`, `member_tenantId`, `viewer_tenantId` | Tenant association asserted during security checks |
| `new_board_id`, `new_card_id`                          | Used to chain CRUD operations                      |



## Execution Flow (Test Strategy)

| Step                                                   | Purpose                                  | Endpoint                              | Expected Result |
|                                                        |                                          |                                       |                 |
| 1. Login All Users | Establish tokens & tenant context | `POST /auth/login`                       | Status 200, store `token`, `tenantId` |
| 2. Create Board (Admin / Member)                       | Validate creation and ownership tagging  | `POST /boards`                        | Status 201, response contains correct `tenantId` |

| 3. Tenant Isolation Check                              | Ensure no cross-tenant visibility        | `GET /boards`                         | Only boards from session user’s tenant are returned |

| 4. RBAC Negative Check                                 |Viewer should NOT create or modify boards | `POST /boards` or `PATCH /boards/:id` | Status 403 Forbidden |

| 5. Field Validation Tests                              | Confirm backend enforces max lengths     | `POST /boards` (name > 60 chars)      | Should return 400 Bad Request |

| 6. Audit Logging Validation                            | Confirm CREATE / UPDATE / DELETE are logged | `DELETE /cards/:id`                | Audit entry should exist in `/audit` endpoint |                  


## Example Request Table
 
| Folder     | Request                          | Method | Endpoint      | What It Verifies          | Key Scripts & Assertions                                         |
|            |                                  |        |               |                           |                                                                  |
| **Auth**   | Admin Login                      | POST   | `/auth/login` | Auth & tenant retrieval   | `pm.environment.set("admin_token", json.token);`                 |
| **Auth**   | Viewer Login                     | POST   | `/auth/login` | View-only role setup      | `pm.environment.set("viewer_token", json.token);`                |
| **Boards** | Create Board (Admin)             | POST   | `/boards`     | Valid creation & tenant tagging | Store `new_board_id`; assert `tenantId === admin_tenantId` |
| **Boards** | Create Board (Viewer - RBAC Negative)**   | POST          | `/boards`                  | Viewer must be blocked | Assert **403 Forbidden**               |
| **Boards** | List Boards (Tenant Filter Check) | GET   | `/boards`     | No cross-tenant visibility | Assert all results match `admin_tenantId`                       |
| **Boards** | Create Board (Invalid Name Length)| POST  | `/boards`     | Validation enforcement     | Assert **400 Bad Request**                                      |
| **Audit**  | Verify Card Deletion Audit Record | GET  | `/audit/logs`   | Logging compliance        | Assert delete event exists                                      |



## Notable Outcomes Based on Test Execution

| Area             | Result                    | Notes                                                             |
|                  |                           |                                                                   |
| Authentication   | ✅ Working as expected   | Tokens & tenant IDs returned correctly                             |
| Tenant Isolation | ❌ **Failed**            | Admin could modify board belonging to another tenant (**DEF-001**) |
| RBAC Enforcement | ❌ **Failed for Viewer** | Viewer role allowed to edit Cards (**DEF-004**)                    |
| Field Validation | ❌ Inconsistent          | API accepted board names >60 chars (**DEF-003**)                   |
| Audit Logging    | ❌ Missing delete logs   | Card deletion not recorded (**DEF-006**)                           |

   

## Recommendations for API Enhancement
1. Enforce tenant checks **in every write operation** (`PATCH`, `DELETE`, `PUT`).
2. Apply **RBAC rules consistently** in both UI and backend controllers.
3. Sync UI and API **max-length validation rules** to avoid mismatched data states.
4. Ensure **audit logs** are generated for all destructive actions for compliance and traceability.

   

## Status
| Readiness for Automation     | Status                                                       |
|                              |                                                              |
| API Functional Checks        | ✅ Can be automated                                         |
| RBAC & Tenant Boundary Tests | ✅ Should be automated and run per commit                   |
| Audit Trail Verification     | ⚠ Requires consistent logging before automation is reliable |

