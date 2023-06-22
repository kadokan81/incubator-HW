import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */


function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 20))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2',[30, 100]))
   

      const minDistance = 5
      const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
      ) => {
        if (!Array.isArray(newValue)) {
            setValue1(newValue as number);
            setValue2([newValue , value2[1]])
            return
        }

        if (newValue[1] - newValue[0] < minDistance) {
          if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance);
            setValue2([clamped, clamped + minDistance]);
          } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue2([clamped - minDistance, clamped]);
          }
        } else {
          setValue2(newValue as number[]);
          setValue1(newValue[0] as number);
        }
      };

 
    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
             
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                              // сделать так чтоб value1 изменялось // пишет студент
                           value={value1}
                           max={100}
                           onChange={handleChange2}
                         id={'hw11-single-slider'}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value2[0]}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            getAriaLabel={() => 'Minimum distance shift'}
                            value={value2}
                            onChange={handleChange2}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
