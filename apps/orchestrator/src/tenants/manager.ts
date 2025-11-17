export class TenantManager {
  private tenants: Map<string, unknown> = new Map();

  async getTenant(tenantId: string): Promise<unknown | null> {
    return this.tenants.get(tenantId) || null;
  }

  async validateTenant(tenantId: string): Promise<boolean> {
    return this.tenants.has(tenantId);
  }
}

