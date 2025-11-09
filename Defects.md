# 🐞 Defects Report (Compressed)

| ID       | Severity | Title                                    | Environment | Preconditions | Steps to Reproduce | Expected Result | Actual Result | Notes         |
| DEF-001  | Critical | Tenant isolation missing on board update | Chrome / Windows | Board belongs to another tenant | Attempt to PATCH board name | Action should be blocked with 403      | Update succeeds (200) | Cross-tenant security breach |

| DEF-002  | Major    | Drag-drop not working in Safari | Safari / macOS | Board with card in two columns | Drag card between columns | Card moves correctly | Drop event not triggered   | Safari drag-drop implementation issue |

| DEF-003  | Major    | Board name length validation missing | Chrome / Windows | Logged in as Member | Create board with >60 chars name | UI/API should block creation | Board is created | Validation rule missing |

| DEF-004  | Critical | Viewer can edit card | Firefox / Windows | Viewer role, card present | Attempt to edit card | Edit action should be disabled / 403 | Edit allowed | RBAC violation |

| DEF-005  | Minor    | Remember Me session expires too early | Chrome / Windows | User checked Remember Me | Reopen app after ~6 days | Session should persist for 7 days | Session expired early | Session duration misconfigured |

| DEF-006  | Major    | Missing audit entry for card deletion | Chrome / Windows | Admin deletes card | Delete card | Audit record should be created | No audit entry logged | Audit logging incomplete |

| DEF-007  | Minor    | Scroll glitch on board list (Mobile Safari) | Safari / iOS Simulator | Multiple boards exist | Scroll board list | Smooth continuous scrolling | Items jump / flicker  | UI rendering issue on small screens |
