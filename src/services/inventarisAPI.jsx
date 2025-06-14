// src/services/inventarisAPI.jsx

import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan anon key proyek Supabase milikmu
const supabaseUrl = 'https://xyzcompany.supabase.co'; // contoh
const supabaseKey = 'your-anon-public-api-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
