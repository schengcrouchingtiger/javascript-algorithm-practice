﻿/*
	author : Sy Le
	http://synle.com
	
	Given a method called isValidWord which takes in an input (a string) and return to see if that word is a valid word in the dictionary.
	
	Write a program that takes in a string which contains multiple words without any space and then return the correct phrase with the space
	
	Eg:
	Input: hereismygift
	Output: here is my gift
	
	
	Input: helloworldfromjavascript
	Output: hello world from javascript
*/


/*
input: a word
output: return if it is a valid word (for simplicity concern). this function only uses a pre-filled dictionary
*/
function isValidWord(w){
//	var dict = ['A', 'ABLE', 'ABOUT', 'ABOVE', 'ACCORDING', 'ACCOUNT', 'ACROSS', 'ACT', 'ACTION', 'ACTIVITIES', 'ACTIVITY', 'ACTUALLY', 'ADDED', 'ADDITION', 'ADDITIONAL', 'ADMINISTRATION', 'AFTER', 'AGAIN', 'AGAINST', 'AGE', 'AGO', 'AHEAD', 'AID', 'AIR', 'ALL', 'ALMOST', 'ALONE', 'ALONG', 'ALREADY', 'ALSO', 'ALTHOUGH', 'ALWAYS', 'AM', 'AMERICA', 'AMERICAN', 'AMONG', 'AMOUNT', 'AN', 'ANALYSIS', 'AND', 'ANOTHER', 'ANSWER', 'ANTI', 'ANY', 'ANYONE', 'ANYTHING', 'APPARENTLY', 'APPEAR', 'APPEARED', 'APPROACH', 'ARE', 'AREA', 'AREAS', 'ARMS', 'ARMY', 'AROUND', 'ART', 'AS', 'ASK', 'ASKED', 'ASSOCIATION', 'AT', 'ATTACK', 'ATTENTION', 'AUDIENCE', 'AVAILABLE', 'AVERAGE', 'AWAY', 'B', 'BACK', 'BAD', 'BALL', 'BASED', 'BASIC', 'BASIS', 'BE', 'BEAUTIFUL', 'BECAME', 'BECAUSE', 'BECOME', 'BED', 'BEEN', 'BEFORE', 'BEGAN', 'BEGINNING', 'BEHIND', 'BEING', 'BELIEVE', 'BELOW', 'BEST', 'BETTER', 'BETWEEN', 'BEYOND', 'BIG', 'BILL', 'BLACK', 'BLOOD', 'BLUE', 'BOARD', 'BODY', 'BOOK', 'BORN', 'BOTH', 'BOY', 'BOYS', 'BRING', 'BRITISH', 'BROUGHT', 'BROWN', 'BUILDING', 'BUILT', 'BUSINESS', 'BUT', 'BY', 'C', 'CALL', 'CALLED', 'CAME', 'CAN', 'CANNOT', 'CANT', 'CAR', 'CARE', 'CARRIED', 'CARS', 'CASE', 'CASES', 'CAUSE', 'CENT', 'CENTER', 'CENTRAL', 'CENTURY', 'CERTAIN', 'CERTAINLY', 'CHANCE', 'CHANGE', 'CHANGES', 'CHARACTER', 'CHARGE', 'CHIEF', 'CHILD', 'CHILDREN', 'CHOICE', 'CHRISTIAN', 'CHURCH', 'CITY', 'CLASS', 'CLEAR', 'CLEARLY', 'CLOSE', 'CLOSED', 'CLUB', 'CO', 'COLD', 'COLLEGE', 'COLOR', 'COME', 'COMES', 'COMING', 'COMMITTEE', 'COMMON', 'COMMUNIST', 'COMMUNITY', 'COMPANY', 'COMPLETE', 'COMPLETELY', 'CONCERNED', 'CONDITIONS', 'CONGRESS', 'CONSIDER', 'CONSIDERED', 'CONTINUED', 'CONTROL', 'CORNER', 'CORPS', 'COST', 'COSTS', 'COULD', 'COULDNT', 'COUNTRIES', 'COUNTRY', 'COUNTY', 'COUPLE', 'COURSE', 'COURT', 'COVERED', 'CUT', 'D', 'DAILY', 'DARK', 'DATA', 'DAY', 'DAYS', 'DE', 'DEAD', 'DEAL', 'DEATH', 'DECIDED', 'DECISION', 'DEEP', 'DEFENSE', 'DEGREE', 'DEMOCRATIC', 'DEPARTMENT', 'DESCRIBED', 'DESIGN', 'DESIGNED', 'DETERMINED', 'DEVELOPED', 'DEVELOPMENT', 'DID', 'DIDNT', 'DIFFERENCE', 'DIFFERENT', 'DIFFICULT', 'DIRECT', 'DIRECTION', 'DIRECTLY', 'DISTANCE', 'DISTRICT', 'DO', 'DOES', 'DOING', 'DONE', 'DONT', 'DOOR', 'DOUBT', 'DOWN', 'DR', 'DRIVE', 'DUE', 'DURING', 'E', 'EACH', 'EARLIER', 'EARLY', 'EARTH', 'EAST', 'EASY', 'ECONOMIC', 'EDUCATION', 'EFFECT', 'EFFECTIVE', 'EFFECTS', 'EFFORT', 'EFFORTS', 'EIGHT', 'EITHER', 'ELEMENTS', 'ELSE', 'END', 'ENGLAND', 'ENGLISH', 'ENOUGH', 'ENTIRE', 'EQUIPMENT', 'ESPECIALLY', 'ESTABLISHED', 'EUROPE', 'EVEN', 'EVENING', 'EVER', 'EVERY', 'EVERYTHING', 'EVIDENCE', 'EXAMPLE', 'EXCEPT', 'EXISTENCE', 'EXPECT', 'EXPECTED', 'EXPERIENCE', 'EXTENT', 'EYE', 'EYES', 'F', 'FACE', 'FACT', 'FAITH', 'FALL', 'FAMILY', 'FAR', 'FARM', 'FATHER', 'FEAR', 'FEDERAL', 'FEED', 'FEEL', 'FEELING', 'FEET', 'FELT', 'FEW', 'FIELD', 'FIGURE', 'FIGURES', 'FILLED', 'FINAL', 'FINALLY', 'FIND', 'FINE', 'FIRE', 'FIRM', 'FIRST', 'FISCAL', 'FIVE', 'FLOOR', 'FOLLOWED', 'FOLLOWING', 'FOOD', 'FOOT', 'FOR', 'FORCE', 'FORCES', 'FOREIGN', 'FORM', 'FORMER', 'FORMS', 'FORWARD', 'FOUND', 'FOUR', 'FREE', 'FREEDOM', 'FRENCH', 'FRIEND', 'FRIENDS', 'FROM', 'FRONT', 'FULL', 'FUNCTION', 'FURTHER', 'FUTURE', 'G', 'GAME', 'GAVE', 'GENERAL', 'GENERALLY', 'GEORGE', 'GET', 'GETTING', 'GIRL', 'GIRLS', 'GIVE', 'GIVEN', 'GIVES', 'GLASS', 'GO', 'GOD', 'GOING', 'GONE', 'GOOD', 'GOT', 'GOVERNMENT', 'GREAT', 'GREATER', 'GREEN', 'GROUND', 'GROUP', 'GROUPS', 'GROWING', 'GROWTH', 'GUN', 'H', 'HAD', 'HAIR', 'HALF', 'HALL', 'HAND', 'HANDS', 'HAPPENED', 'HARD', 'HAS', 'HAVE', 'HAVING', 'HE', 'HEAD', 'HEAR', 'HEARD', 'HEART', 'HEAVY', 'HELD', 'HELL', 'HELP', 'HER', 'HERE', 'HERSELF', 'HES', 'HIGH', 'HIGHER', 'HIM', 'HIMSELF', 'HIS', 'HISTORY', 'HIT', 'HOLD', 'HOME', 'HOPE', 'HORSE', 'HOSPITAL', 'HOT', 'HOTEL', 'HOUR', 'HOURS', 'HOUSE', 'HOW', 'HOWEVER', 'HUMAN', 'HUNDRED', 'HUSBAND', 'I', 'IDEA', 'IDEAS', 'IF', 'ILL', 'IM', 'IMAGE', 'IMMEDIATELY', 'IMPORTANT', 'IN', 'INCLUDE', 'INCLUDING', 'INCOME', 'INCREASE', 'INCREASED', 'INDEED', 'INDIVIDUAL', 'INDUSTRIAL', 'INDUSTRY', 'INFLUENCE', 'INFORMATION', 'INSIDE', 'INSTEAD', 'INTEREST', 'INTERNATIONAL', 'INTO', 'INVOLVED', 'IS', 'ISLAND', 'ISSUE', 'IT', 'ITS', 'ITSELF', 'IVE', 'J', 'JOB', 'JOHN', 'JUST', 'JUSTICE', 'KEEP', 'KENNEDY', 'KEPT', 'KIND', 'KNEW', 'KNOW', 'KNOWLEDGE', 'KNOWN', 'L', 'LABOR', 'LACK', 'LAND', 'LANGUAGE', 'LARGE', 'LARGER', 'LAST', 'LATE', 'LATER', 'LATTER', 'LAW', 'LAY', 'LEAD', 'LEADERS', 'LEARNED', 'LEAST', 'LEAVE', 'LED', 'LEFT', 'LENGTH', 'LESS', 'LET', 'LETTER', 'LETTERS', 'LEVEL', 'LIFE', 'LIGHT', 'LIKE', 'LIKELY', 'LINE', 'LINES', 'LIST', 'LITERATURE', 'LITTLE', 'LIVE', 'LIVED', 'LIVING', 'LOCAL', 'LONG', 'LONGER', 'LOOK', 'LOOKED', 'LOOKING', 'LOST', 'LOT', 'LOVE', 'LOW', 'LOWER', 'M', 'MADE', 'MAIN', 'MAJOR', 'MAKE', 'MAKES', 'MAKING', 'MAN', 'MANNER', 'MANS', 'MANY', 'MARCH', 'MARKET', 'MARRIED', 'MASS', 'MATERIAL', 'MATTER', 'MAY', 'MAYBE', 'ME', 'MEAN', 'MEANING', 'MEANS', 'MEDICAL', 'MEET', 'MEETING', 'MEMBER', 'MEMBERS', 'MEN', 'MERELY', 'MET', 'METHOD', 'METHODS', 'MIDDLE', 'MIGHT', 'MILES', 'MILITARY', 'MILLION', 'MIND', 'MINUTES', 'MISS', 'MODERN', 'MOMENT', 'MONEY', 'MONTH', 'MONTHS', 'MORAL', 'MORE', 'MORNING', 'MOST', 'MOTHER', 'MOVE', 'MOVED', 'MOVEMENT', 'MOVING', 'MR', 'MRS', 'MUCH', 'MUSIC', 'MUST', 'MY', 'MYSELF', 'N', 'NAME', 'NATION', 'NATIONAL', 'NATIONS', 'NATURAL', 'NATURE', 'NEAR', 'NEARLY', 'NECESSARY', 'NEED', 'NEEDED', 'NEEDS', 'NEGRO', 'NEITHER', 'NEVER', 'NEW', 'NEXT', 'NIGHT', 'NO', 'NON', 'NOR', 'NORMAL', 'NORTH', 'NOT', 'NOTE', 'NOTHING', 'NOW', 'NUCLEAR', 'NUMBER', 'NUMBERS', 'OBTAINED', 'OBVIOUSLY', 'OF', 'OFF', 'OFFICE', 'OFTEN', 'OH', 'OLD', 'ON', 'ONCE', 'ONE', 'ONES', 'ONLY', 'OPEN', 'OPENED', 'OPERATION', 'OPPORTUNITY', 'OR', 'ORDER', 'ORGANIZATION', 'OTHER', 'OTHERS', 'OUR', 'OUT', 'OUTSIDE', 'OVER', 'OWN', 'P', 'PAID', 'PAPER', 'PART', 'PARTICULAR', 'PARTICULARLY', 'PARTS', 'PARTY', 'PASSED', 'PAST', 'PATTERN', 'PAY', 'PEACE', 'PEOPLE', 'PER', 'PERFORMANCE', 'PERHAPS', 'PERIOD', 'PERSON', 'PERSONAL', 'PERSONS', 'PHYSICAL', 'PICTURE', 'PIECE', 'PLACE', 'PLACED', 'PLAN', 'PLANE', 'PLANNING', 'PLANS', 'PLANT', 'PLAY', 'POINT', 'POINTS', 'POLICE', 'POLICY', 'POLITICAL', 'POOL', 'POOR', 'POPULATION', 'POSITION', 'POSSIBLE', 'POST', 'POWER', 'PRESENT', 'PRESIDENT', 'PRESS', 'PRESSURE', 'PRICE', 'PRINCIPLE', 'PRIVATE', 'PROBABLY', 'PROBLEM', 'PROBLEMS', 'PROCESS', 'PRODUCTION', 'PRODUCTS', 'PROGRAM', 'PROGRAMS', 'PROGRESS', 'PROPERTY', 'PROVIDE', 'PROVIDED', 'PUBLIC', 'PURPOSE', 'PUT', 'QUALITY', 'QUESTION', 'QUESTIONS', 'QUITE', 'R', 'RACE', 'RADIO', 'RAN', 'RANGE', 'RATE', 'RATHER', 'REACHED', 'REACTION', 'READ', 'READING', 'READY', 'REAL', 'REALLY', 'REASON', 'RECEIVED', 'RECENT', 'RECENTLY', 'RECORD', 'RED', 'RELIGION', 'RELIGIOUS', 'REMEMBER', 'REPORT', 'REPORTED', 'REQUIRED', 'RESEARCH', 'RESPECT', 'RESPONSIBILITY', 'REST', 'RESULT', 'RESULTS', 'RETURN', 'RETURNED', 'RIGHT', 'RIVER', 'ROAD', 'ROOM', 'RUN', 'RUNNING', 'S', 'SAID', 'SALES', 'SAME', 'SAT', 'SAW', 'SAY', 'SAYING', 'SAYS', 'SCHOOL', 'SCHOOLS', 'SCIENCE', 'SEASON', 'SECOND', 'SECRETARY', 'SECTION', 'SEE', 'SEEM', 'SEEMED', 'SEEMS', 'SEEN', 'SELF', 'SENSE', 'SENT', 'SERIES', 'SERIOUS', 'SERVED', 'SERVICE', 'SERVICES', 'SET', 'SEVEN', 'SEVERAL', 'SHALL', 'SHE', 'SHORT', 'SHOT', 'SHOULD', 'SHOW', 'SHOWED', 'SHOWN', 'SIDE', 'SIMILAR', 'SIMPLE', 'SIMPLY', 'SINCE', 'SINGLE', 'SITUATION', 'SIX', 'SIZE', 'SLOWLY', 'SMALL', 'SO', 'SOCIAL', 'SOCIETY', 'SOME', 'SOMETHING', 'SOMETIMES', 'SOMEWHAT', 'SON', 'SOON', 'SORT', 'SOUND', 'SOUTH', 'SOUTHERN', 'SOVIET', 'SPACE', 'SPEAK', 'SPECIAL', 'SPECIFIC', 'SPIRIT', 'SPRING', 'SQUARE', 'ST', 'STAFF', 'STAGE', 'STAND', 'STANDARD', 'START', 'STARTED', 'STATE', 'STATEMENTS', 'STATES', 'STAY', 'STEP', 'STEPS', 'STILL', 'STOCK', 'STOOD', 'STOP', 'STOPPED', 'STORY', 'STRAIGHT', 'STREET', 'STRENGTH', 'STRONG', 'STUDENT', 'STUDENTS', 'STUDY', 'SUBJECT', 'SUCH', 'SUDDENLY', 'SUMMER', 'SUN', 'SUPPORT', 'SURE', 'SURFACE', 'SYSTEM', 'SYSTEMS', 'T', 'TABLE', 'TAKE', 'TAKEN', 'TAKING', 'TALK', 'TAX', 'TECHNICAL', 'TELL', 'TEMPERATURE', 'TEN', 'TERM', 'TERMS', 'TEST', 'TH', 'THAN', 'THAT', 'THATS', 'THE', 'THEIR', 'THEM', 'THEMSELVES', 'THEN', 'THEORY', 'THERE', 'THEREFORE', 'THERES', 'THESE', 'THEY', 'THING', 'THINGS', 'THINK', 'THINKING', 'THIRD', 'THIRTY', 'THIS', 'THOSE', 'THOUGHT', 'THREE', 'THROUGH', 'THROUGH', 'THROUGHOUT', 'THUS', 'TIME', 'TIMES', 'TO', 'TODAY', 'TOGETHER', 'TOLD', 'TOO', 'TOOK', 'TOP', 'TOTAL', 'TOWARD', 'TOWN', 'TRADE', 'TRAINING', 'TREATMENT', 'TRIAL', 'TRIED', 'TROUBLE', 'TRUE', 'TRUTH', 'TRY', 'TRYING', 'TURN', 'TURNED', 'TWENTY', 'TWO', 'TYPE', 'TYPES', 'U', 'UNDER', 'UNDERSTAND', 'UNDERSTANDING', 'UNION', 'UNITED', 'UNIVERSITY', 'UNTIL', 'UP', 'UPON', 'US', 'USE', 'USED', 'USING', 'USUALLY', 'VALUE', 'VALUES', 'VARIOUS', 'VERY', 'VIEW', 'VOICE', 'VOLUME', 'WAITING', 'WALKED', 'WALL', 'WANT', 'WANTED', 'WAR', 'WAS', 'WASHINGTON', 'WASNT', 'WATER', 'WAY', 'WAYS', 'WE', 'WEEK', 'WEEKS', 'WELL', 'WENT', 'WERE', 'WEST', 'WESTERN', 'WHAT', 'WHATEVER', 'WHEN', 'WHERE', 'WHETHER', 'WHICH', 'WHILE', 'WHITE', 'WHO', 'WHOLE', 'WHOM', 'WHOSE', 'WHY', 'WIDE', 'WIFE', 'WILL', 'WILLIAM', 'WINDOW', 'WISH', 'WITH', 'WITHIN', 'WITHOUT', 'WOMAN', 'WOMEN', 'WORD', 'WORDS', 'WORK', 'WORKED', 'WORKING', 'WORKS', 'WORLD', 'WOULD', 'WOULDNT', 'WRITING', 'WRITTEN', 'WRONG', 'WROTE', 'YEAR', 'YEARS', 'YES', 'YET', 'YORK', 'YOU', 'YOUNG', 'YOUR', 'YOURE'];
	var dict = ['HERE', 'IS', 'YOUR', 'GIFT', 'HELLO', 'WORLD', 'FROM', 'JAVASCRIPT'];
	return dict.indexOf(w) >= 0;
}


/*
back tracking using stacks (iterative approach with 2 stacks).
this method only returns the first match

return false if words are impossible to be broken up.
*/
function wordBreak(str){
	var solution = [];//stack that store the solution to get to the last substring
	var back = [];//stack that stores the last substring (use in case of hitting a dead end)
	var start = 0;
	
	var curSolutionSet = [];
	
	str = str.toUpperCase();
	
	var i = 0;
	
	while (str.length > 0){
		//get all possible range
		for (var len = 1; len <= str.length; len++){
			var w = str.substring(0, len);
			var newStr = str.substring(len, str.length);
			var valid = isValidWord(w);
			
			if (valid){
				solution.push(w);
				back.push(newStr);
			}
			
			i++;
		}
		
		
		
		if (back.length == 0)//there is no way to form a first valid string, then return false
			return false;
		
		str = back.pop();
		curSolutionSet.push( solution.pop());
	}
	
	return curSolutionSet.join(' ');
}


//sample test
console.log('hereisyourgift : ', wordBreak('hereisyourgift'));
console.log('helloworldfromjavascript : ', wordBreak('helloworldfromjavascript'));
