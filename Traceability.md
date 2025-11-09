# Traceability Matrix — Boards Module (SaaS)

### Traceability Matrix — Compressed Format

| AC    | Requirement                                  | Manual Tests           | Automation Test                           | Status |
|       |                                              |                        |                                           |        |
| AC-1  | Remember Me session persistence              | TC-AUTH-001/002        | auth_persistence.spec.ts                  | Pass   |
| AC-2  | Tenant data isolation                        | TC-TENANT-001/002      | Postman: tenant_isolation_tests           | Pass   |
| AC-3a | RBAC: Admin full CRUD                        | TC-RBAC-001/002        | rbac_admin_permissions.spec.ts            | Pass   |
| AC-3b | RBAC: Member limited CRUD                    | TC-RBAC-003/004        | Postman: rbac_member_restrictions         | Pass   |
| AC-3c | RBAC: Viewer read-only                       | TC-RBAC-005            | rbac_viewer_restrictions.spec.ts          | Pass   |
| AC-4a | Boards: create/rename/archive                | TC-BOARD-001/002/003   | boards_lifecycle.spec.ts                  | Pass   |
| AC-4b | Board name ≤ 60 chars validation             | TC-BOARD-004/005/006   | Postman: board_name_validation            | Pass   |
| AC-5a | Cards: create (title ≤ 120 chars)            | TC-CARD-001/002/003    | cards_creation.spec.ts                    | Pass   |
| AC-5b | Cards: drag-drop movement                    | TC-CARD-004/005        | cards_dragdrop.spec.ts                    | Pass   |
| AC-6  | Audit logs (CRUD events recorded)            | TC-AUDIT-001/002       | Postman: audit_log_verification           | Pass   |
| AC-7  | Cross-browser support                        | TC-XBROWSER-001/002/003| Manual + headless smoke                   | Pass   |
