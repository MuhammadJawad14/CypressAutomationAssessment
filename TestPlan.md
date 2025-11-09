# Test Plan: Boards Module (SaaS Application)

## 1. Objective
The purpose of this test plan is to define the Quality Assurance strategy for validating the Boards and Cards module of a multi tenant SaaS application. The plan ensures coverage of core functional flows as well as critical security related acceptance criteria including tenant data isolation and role based access control. The test approach follows a risk based model, emphasizing the highest impact areas: multi tenant separation, RBAC enforcement, audit logging integrity, input boundary validation, and cross browser interaction behavior. The testing scope includes manual exploratory validation, end to end automation, API testing, and performance smoke checks. A mock or staging environment is assumed.


## 2. Scope

### In Scope
| Feature Area               | Acceptance Criteria                                                    | Validation Method                                           |
| Authentication & Session   | Login with email/password; Remember Me keeps session for 7 days        | UI login flow and session token persistence checks          |
| Multi Tenant Isolation     | User can only access data within their own tenant                      | API negative tests with cross-tenant tokens + UI validation |
| RBAC                       | Admin: full CRUD; Member: CRUD own only; Viewer: read only             | UI role state checks and API negative permission tests      |
| Boards                     | Create, rename, archive; Name required and ≤ 60 characters             | Functional tests and boundary value checks                  |
| Cards                      | Create; Title ≤ 120 characters; Move between columns                   | Functional tests, drag-drop tests, and boundary checks      |
| Audit Logging              | All create/update/delete actions logged with user + tenant + timestamp | Validate audit log entries via API or log endpoint          |
| Browser Support            | Chrome and Firefox full; Safari and Mobile smoke only                  | Cross browser smoke matrix execution                        |

### Out of Scope
- Full penetration security testing beyond the required security smoke checks.
- Full accessibility compliance auditing beyond accessibility smoke checks.
- Direct database level data validation where backend access is not provided.


## 3. Risks and Mitigation Strategy

### Risks and Mitigation

| Risk Area                   | Impact                          | Sev | Mitigation                                                    |
| Tenant isolation failure    | Data visible across tenants     | P1  | Assert tenantId filtering in all API read/write operations    |
| RBAC bypass                 | Unauthorized actions possible   | P1  | UI role checks + API negative tests expecting 403 responses   |
| Session persistence issues  | Session lost or stored insecure | P2  | Validate token expiry + storage; verify Remember Me behavior  |
| Data input limit errors     | UI/API break on invalid lengths | P2  | Boundary tests at 0, 1, max, max+1 for board/card fields      |
| Drag-drop inconsistency     | Card move fails in some browsers| P2  | Cross-browser drag tests + fallback move action validation    |     


## 4. Test Levels and Tools
      
| Test Level                        | Tool or Framework        | Purpose                                                                      |
| Manual Functional and Exploratory | Browser Developer Tools  | Workflow validation, behavior checks, and risk discovery                     |
| UI End to End Automation          | Cypress                  | Stable regression coverage and CI ready test execution                       |
| API Testing                       | Postman or Newman        | Response schema validation, negative tests, RBAC and tenant isolation checks |
| Performance Smoke Testing         | k6 or JMeter             | Light load verification of core board and card workflow                      |
| Documentation and Reporting       | Markdown and Screenshots | Test evidence, traceability documentation, and summary reporting             |


## 5. Test Environment and Data Assumptions
- Base environment URL (example placeholder): `https://test-staging.boards-app.test`
- Required user accounts:
  - `admin@tenantA.com` (Admin role, tenant A)
  - `member@tenantA.com` (Member role, tenant A)
  - `viewer@tenantA.com` (Viewer role, tenant A)
- Two tenants must exist to validate isolation.
- Tokens and entity identifiers stored using Postman environment variables.
- Sample board must exist to support card creation and drag and drop tests.


## 6. Test Execution Strategy

| Suite Name             | Focus                                                                                     | Execution Frequency                       |
| Smoke Suite            | Login, board creation, card creation, move card, RBAC restriction, tenant isolation check | On every new build or pull request        |
| Full Regression Suite  | Complete functional, negative, and boundary coverage                                      | Before each release cycle                 |
| Cross Browser Suite    | Safari and Mobile smoke coverage                                                          | Weekly or pre-release                     |
| Performance Smoke Test | Login → Create Board → Create Cards → Move Card under light concurrency                   | When performance environment is available |


## 7. Entry Criteria
- Environment is deployed and stable.
- Test accounts for all roles are available.
- API basic health checks return successful responses.

## 8. Exit Criteria
- Smoke tests pass with no high severity issues.
- RBAC and multi tenant isolation tests pass without exception.
- All unresolved defects are documented and reviewed for business acceptance.
- Test summary report is delivered.

## 9. Reporting
Defects will be documented using a standardized format including Title, Environment, Severity, Priority, Preconditions, Steps to Reproduce, Expected Result, Actual Result, and Evidence.  

A final Test Summary Report will describe:
- What was tested
- What is not covered
- High and medium risk areas
- Release recommendation
