import { supabase } from "$lib/supabase";

interface Dilemma {
	option1: string
	option2: string
}
export async function get_dilemma() {
	const { data, error } = await supabase.from('dilemma').select("option1, option2")
	return data as Dilemma[]
}


