
describe('footer navigation', function() {

	beforeEach(function() {
		affix('#calendar');
		var options = {
			footer: {
				left: 'next,prev,prevYear,nextYear today',
				center: '',
				right: 'title'
			}
		};
		$('#calendar').fullCalendar(options);
	});

	describe('and click next', function() {
		it('should change view to next month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-footer-toolbar .fc-next-button').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2010-03-01');
		});
	});

	describe('and click prev', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-footer-toolbar .fc-prev-button').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2010-01-01');
		});
	});

	describe('and click prevYear', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-footer-toolbar .fc-prevYear-button').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2009-02-01');
		});
	});

	describe('and click nextYear', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-footer-toolbar .fc-nextYear-button').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate');
			expect(newDate).toEqualMoment('2011-02-01');
		});
	});

	describe('and click today', function() {
		it('should change view to prev month', function() {
			$('#calendar').fullCalendar('gotoDate', '2010-02-01');
			$('.fc-footer-toolbar .fc-today-button').simulate('click');
			var newDate = $('#calendar').fullCalendar('getDate'); // will be ambig zone
			newDate.local(); // assign the local timezone
			expect(newDate).toEqualNow();
		});
	});
});
