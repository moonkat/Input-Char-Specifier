// Needs: jquery.js
$(document).ready(function(){
	/**
	 * @Amit K.
	 * Character limit specifier
	 * Status : complete
	 *
	 * Use to restrict the input element to certain character limit
	 * @example
	 * @ <textarea charlimit="500" charcounter="thatId" cols="25" rows="20" ......  ></textarea>
	 * 
	*/
	var charlimitSelector		= "[charlimit]";
	var charlimitTag			= "charlimit";
	var charcounterTag			= 'charcounter';
	$(charlimitSelector).each(function() {
		$(this).keydown(function()
		{ 
			var iniVal,valLength,maxlimit,tempVal;
			iniVal=$(this).val();
			maxlimit=$(this).attr(charlimitTag);
			valLength=$(this).val().length;
			useCounter = $(this).attr(charcounterTag) || false;
			
			if (valLength > maxlimit) {
				tempVal = iniVal.substring(0,maxlimit);
				$(this).val(tempVal);
			}
			else {
				tempVal = eval(maxlimit-valLength);
				if (useCounter)
					$('#'+useCounter).val(tempVal);
			}
		});
	});
});