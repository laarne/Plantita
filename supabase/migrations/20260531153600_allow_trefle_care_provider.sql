alter table public.plant_care_cache
  drop constraint if exists plant_care_cache_provider_known;

alter table public.plant_care_cache
  add constraint plant_care_cache_provider_known
  check (provider in ('Perenual', 'Trefle', 'GrowMate'));

alter table public.plant_care_profiles
  drop constraint if exists plant_care_profiles_provider_known;

alter table public.plant_care_profiles
  add constraint plant_care_profiles_provider_known
  check (provider in ('Perenual', 'Trefle', 'GrowMate'));
