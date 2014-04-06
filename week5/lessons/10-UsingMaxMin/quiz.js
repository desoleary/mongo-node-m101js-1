
Quiz: Using $max and $min

Again thinking about the zip code database, write an aggregation query 
that will return the population of the postal code in each state with 
the highest population. It should return output that looks like this:
{
			"_id" : "WI",
			"pop" : 57187
		},
		{
			"_id" : "WV",
			"pop" : 70185
		},
..and so on
Once again, the collection is named zips.

db.zips.aggregate([{$group: {"_id":"$state", pop:{"$max":"$pop"} }}])