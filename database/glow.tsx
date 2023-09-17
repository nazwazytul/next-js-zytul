import supabase from '../lib/supabase'

export async function getTipe() {
    try {
        let variablePemanggil = await supabase
            .from("tipekulit")
            .select("*")
        if (variablePemanggil.status >=200 && variablePemanggil.status < 300) {
            return variablePemanggil.data || [];
        } else {
            console.log(variablePemanggil.error);
            throw "Gagal mengambil data ke Database"
        }
    }catch (e) {
        throw e;
    }
}