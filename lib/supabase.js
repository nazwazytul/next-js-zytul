import { createClient } from "@supabase/supabase-js";

const supabase = createClient (
    "https://nmojaicyhabjpptqwvow.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tb2phaWN5aGFianBwdHF3dm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MjM3NzIsImV4cCI6MjAxMDA5OTc3Mn0.thsJ5wNSjPyh-phDb9bJynCHigvPglEjYxq1qQU7uZw",
    {
        db: {schema : "public" },
    }
);
export default supabase