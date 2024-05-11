import { supabase } from "$lib/supabase";

interface Testimonial {
	id: number
	title: string
	description: string
	icon: string
	by: string
}

export function get_initials(str: string) {
    var words = str.split(" ");
    var initials = words.map(function(word) {
        return word.charAt(0).toUpperCase();
    });
    return initials.join('');
}

export async function get_testimonial() {
	const { data, error } = await supabase.from('testimonial').select("*")
	return data as Testimonial []
}


