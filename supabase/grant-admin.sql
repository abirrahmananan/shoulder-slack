do $$
declare
  admin_email text := 'admin@example.com';
  admin_user_id uuid;
begin
  select id
  into admin_user_id
  from auth.users
  where lower(email) = lower(admin_email);

  if admin_user_id is null then
    raise exception 'No Supabase Auth user found for %. Create that Auth user and update admin_email before running this script.', admin_email;
  end if;

  insert into public.store_admins (user_id)
  values (admin_user_id)
  on conflict (user_id) do nothing;
end
$$;
