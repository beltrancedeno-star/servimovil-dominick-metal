import { supabase } from "@/lib/supabase/client";

export class BaseRepository<T extends Record<string, unknown>> {
  constructor(private readonly tableName: string) {}

  async list(select = "*"): Promise<T[]> {
    const { data, error } = await supabase.from(this.tableName).select(select);

    if (error) {
      throw error;
    }

    return data as unknown as T[];
  }

  async getById(id: string, select = "*"): Promise<T> {
    const { data, error } = await supabase.from(this.tableName).select(select).eq("id", id).single();

    if (error) {
      throw error;
    }

    return data as unknown as T;
  }

  async create(payload: Partial<T>): Promise<T> {
    const { data, error } = await supabase
      .from(this.tableName)
      .insert(payload as never)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data as unknown as T;
  }

  async update(id: string, payload: Partial<T>): Promise<T> {
    const { data, error } = await supabase
      .from(this.tableName)
      .update(payload as never)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data as unknown as T;
  }

  async remove(id: string) {
    const { error } = await supabase.from(this.tableName).delete().eq("id", id);

    if (error) {
      throw error;
    }
  }
}
