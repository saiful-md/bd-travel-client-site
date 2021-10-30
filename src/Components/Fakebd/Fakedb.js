/*  

https://i.ibb.co/7pWydsS/images-4.jpg
https://i.ibb.co/PFVWHZc/download-1.jpg
https://i.ibb.co/MBZWtmS/download.jpg
https://i.ibb.co/hMcjnF7/images-3.jpg
https://i.ibb.co/KrHkK2x/images-2.jpg
https://i.ibb.co/bQqpFSq/Optimized-9114200-sylhet-1.jpg
https://i.ibb.co/sgmwSmb/9114200-sylhet-1.jpg
https://i.ibb.co/QfhmRpt/hqdefault.jpg
https://i.ibb.co/pWg6vkp/21137523733-fe934dba5a-b.jpg
https://i.ibb.co/PtvgLxn/1609510631.jpg
https://i.ibb.co/JydNNpf/cover-3-870x555.jpg


*/
const addTour = {
	offering: [
		{
			id: 0,
			name: 'Sajek Valley',
			img: 'https://i.ibb.co/pWg6vkp/21137523733-fe934dba5a-b.jpg',
			description:
				'Sajek Valley (Bengali: সাজেক উপত্যকা) is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.[3] The valley is 2,000 feet (610 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.'
		},
		{
			id: 1,
			name: 'St. Martins Island',
			img: 'https://i.ibb.co/JydNNpf/cover-3-870x555.jpg',
			description:
				'St. Martins Island (Bengali: সেন্ট মার্টিন্স দ্বীপ) is a small island (area only 3 km2) in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Coxs Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. It is about 8 kilometres (5 miles) west of the northwest coast of Myanmar, at the mouth of the Naf River.'
		},
		{
			id: 2,
			name: 'Kuakata',
			img: 'https://i.ibb.co/MBZWtmS/download.jpg',
			description:
				'Kuakata (Bengali: কুয়াকাটা) is a town in southern Bangladesh known for its panoramic sea beach.[1][2] Kuakata beach is a sandy expanse 18 kilometres (11 mi) long and 3 kilometres (1.9 mi) wide.[3] From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal.'
		},
		{
			id: 3,
			name: 'Sylhet',
			img: 'https://i.ibb.co/7pWydsS/images-4.jpg',
			description:
				'Sylhet (Bengali: সিলেট) is a metropolitan city in northeastern Bangladesh. It is the administrative seat of Sylhet Division. Located on the north bank of the Surma River at the eastern tip of Bengal, Sylhet has a subtropical climate and lush highland terrain. The city has a population of more than half a million, and is one of the largest cities in Bangladesh after Khulna, Chittagong and Dhaka. [1] Sylhet is one of the most important spiritual and cultural centres in Bangladesh. Furthermore, it is one of the most economically important cities in the country after Dhaka and Chittagong. The city produces the highest amount of tea and gas in the country.'
		},
		{
			id: 4,
			name: 'Sitakunda Upazila',
			img: 'https://i.ibb.co/QfhmRpt/hqdefault.jpg',
			description:
				'Sitakunda (Bengali: সীতাকুণ্ড Shitakunḍo, IPA: [ʂitakunɖo]) is an upazila, or administrative unit, in the Chittagong District of Bangladesh. It includes one urban settlement, the Sitakunda Town, and 10 unions, the lowest of administrative units in Bangladesh. It is one of the 15 upazilas, the second tier of administrative units, of the Chittagong District, which also includes 33 thanas, the urban equivalent of upazilas. The district is part of the Chittagong Division, the highest order of administrative units in Bangladesh. Sitakunda is the home of the countrys first eco-park, as well as alternative energy projects, specifically wind energy and '
		},
		{
			id: 5,
			name: 'Sreemangal Upazila',
			img: 'https://i.ibb.co/bQqpFSq/Optimized-9114200-sylhet-1.jpg',
			description:
				'Sreemangal (Bengali: শ্রীমঙ্গল, romanized: Srimongol) is an upazila of Moulvibazar District[1] in the Sylhet Division of Bangladesh.t is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town'
		},
		{
			id: 6,
			name: 'Rangamati',
			img: '',
			description:
				'Rangamati (Bengali: রাঙ্গামাটি;Chakma:𑄢𑄋𑄟𑄖𑄴𑄳𑄠 )is the administrative headquarters of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh. The town is located at 22°3760N 92°120E and has an altitude of 14 metres (46 ft).[1] The district is administered by an office named as District Administration, Rangamati.'
		}
	]
};

/* 

{
   "offering":[
      {
         "id":0,
         "name":"Sajek Valley",
         "img":"https://i.ibb.co/pWg6vkp/21137523733-fe934dba5a-b.jpg",
         "description":"Sajek Valley (Bengali: সাজেক উপত্যকা) is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.[3] The valley is 2,000 feet (610 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati."
      },
      {
         "id":1,
         "name":"St. Martins Island",
         "img":"https://i.ibb.co/JydNNpf/cover-3-870x555.jpg",
         "description":"St. Martins Island (Bengali: সেন্ট মার্টিন্স দ্বীপ) is a small island (area only 3 km2) in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Coxs Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. It is about 8 kilometres (5 miles) west of the northwest coast of Myanmar, at the mouth of the Naf River."
      },
      {
         "id":2,
         "name":"Kuakata",
         "img":"https://i.ibb.co/MBZWtmS/download.jpg",
         "description":"Kuakata (Bengali: কুয়াকাটা) is a town in southern Bangladesh known for its panoramic sea beach.[1][2] Kuakata beach is a sandy expanse 18 kilometres (11 mi) long and 3 kilometres (1.9 mi) wide.[3] From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal."
      },
      {
         "id":3,
         "name":"Sylhet",
         "img":"https://i.ibb.co/7pWydsS/images-4.jpg",
         "description":"Sylhet (Bengali: সিলেট) is a metropolitan city in northeastern Bangladesh. It is the administrative seat of Sylhet Division. Located on the north bank of the Surma River at the eastern tip of Bengal, Sylhet has a subtropical climate and lush highland terrain. The city has a population of more than half a million, and is one of the largest cities in Bangladesh after Khulna, Chittagong and Dhaka. [1] Sylhet is one of the most important spiritual and cultural centres in Bangladesh. Furthermore, it is one of the most economically important cities in the country after Dhaka and Chittagong. The city produces the highest amount of tea and gas in the country."
      },
      {
         "id":4,
         "name":"Sitakunda Upazila",
         "img":"https://i.ibb.co/QfhmRpt/hqdefault.jpg",
         "description":"Sitakunda (Bengali: সীতাকুণ্ড Shitakunḍo, IPA: [ʂitakunɖo]) is an upazila, or administrative unit, in the Chittagong District of Bangladesh. It includes one urban settlement, the Sitakunda Town, and 10 unions, the lowest of administrative units in Bangladesh. It is one of the 15 upazilas, the second tier of administrative units, of the Chittagong District, which also includes 33 thanas, the urban equivalent of upazilas. The district is part of the Chittagong Division, the highest order of administrative units in Bangladesh. Sitakunda is the home of the countrys first eco-park, as well as alternative energy projects, specifically wind energy and "
      },
      {
         "id":5,
         "name":"Sreemangal Upazila",
         "img":"https://i.ibb.co/bQqpFSq/Optimized-9114200-sylhet-1.jpg",
         "description":"Sreemangal (Bengali: শ্রীমঙ্গল, romanized: Srimongol) is an upazila of Moulvibazar District[1] in the Sylhet Division of Bangladesh.t is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town"
      },
      {
         "id":6,
         "name":"Rangamati",
         "img":"",
         "description":"Rangamati (Bengali: রাঙ্গামাটি;Chakma:𑄢𑄋𑄟𑄖𑄴𑄳𑄠 )is the administrative headquarters of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh. The town is located at 22°3760N 92°120E and has an altitude of 14 metres (46 ft).[1] The district is administered by an office named as District Administration, Rangamati."
      }
   ]
}



*/
