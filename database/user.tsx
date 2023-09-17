import supabase from "@/lib/supabase";

export async function findUser(email: String) {
    try {
        var snapshot = await supabase.from('users').select().eq('email', email)
        if (snapshot.status = 200) {
            return snapshot.data || []
        } else {
            throw 'User: Gagal mengambil data ke database'
        }
    } catch (e) {
        throw e
    }
}