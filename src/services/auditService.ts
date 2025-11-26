import type { AuditAction, AuditFilters } from '../types/audit';
import { auditMock } from '../modules/admin-audit/mock/auditMock';

export const getAuditData = (filters: AuditFilters): AuditAction[] => {
  return auditMock.filter((item) => {
    const itemDate = new Date(item.timestamp);
    const fromDate = filters.dateFrom ? new Date(filters.dateFrom) : null;
    const toDate = filters.dateTo ? new Date(filters.dateTo) : null;

    return (
      (!filters.user || item.user.toLowerCase().includes(filters.user.toLowerCase())) &&
      (!filters.entity || item.entity.toLowerCase().includes(filters.entity.toLowerCase())) &&
      (!filters.action || item.action.toLowerCase().includes(filters.action.toLowerCase())) &&
      (!fromDate || itemDate >= fromDate) &&
      (!toDate || itemDate <= toDate)
    );
  });
};
