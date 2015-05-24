+function ($) {

    $(function(){
        // nav
        $(document).on('click', '[ui-nav] a', function (e) {
            console.log('Yes you clicked me! '+JSON.stringify(e.target));
            var $this = $(e.target), $active;
            //$this.trigger('apply.active', e);
            $this.is('a') || ($this = $this.closest('a'));
            $active = $this.siblings( ".active" );
            //$active && $active.find('> ul:visible').slideUp(400);
            //
            //($this.hasClass('active') && $this.next().slideUp(400)) || $this.next().slideDown(400);
            //($this.hasClass('active') && $this.next().slideDown(400));
            //$this.parent().toggleClass('active');
            //
            // $this.next().is('ul') && e.preventDefault();

        });

    });
}(jQuery);