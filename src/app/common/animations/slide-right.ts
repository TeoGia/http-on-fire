import { animation, query, group, animate, style } from '@angular/animations';

export const slideRightAnimation =
  animation([

    query(':enter, :leave',
      style({ position: 'absolute' }), { optional: true }
    ),

    query(':enter',
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      { optional: true }),

    query(':leave', [
      animate('600ms cubic-bezier(.45,0,.35,1)', style({ opacity: 0, transform: 'translateX(100%)' }))
    ], { optional: true }),

    group([
      query(':enter', [
        animate('600ms cubic-bezier(.45,0,.35,1)', style('*'))
      ], { optional: true })
    ])

  ]);
