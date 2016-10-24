/**
 * Created by vadis on 21.10.16.
 * @todo add logo
 */
(function () {
    'use strict';

    //import
    let Teamlist = window.Teamlist;
    let AddTeam  = window.AddTeam;

    let group_1 = new Teamlist({
        el: document.querySelector('.group_1'),
        data: {
            title: 'Group 1',
            items: [
                {
                    name: 'Bayern',
                    logo: 'bayern.png'
                },
                {
                    name: 'Aberdeen',
                    logo: 'aberdin.svg'
                },
                {
                    name: 'Cardiff',
                    logo: 'cardiff.jpg'
                }
            ]
        }
    });

    let addTeam_1 = new AddTeam({
        el: document.querySelector('.addTeam_1'),
        onSubmit(form){
            group_1.addTeam({
                name: form.getField('name').value,
                logo: 'bayern.png'
            });
        }
    });


    window.group_1 = group_1;
})();