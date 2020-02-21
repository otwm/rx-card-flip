import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(x => console.log(x));

/**
 * 게임 룰
 * 게임 룸 생성 및 플레이어 선택(cpu/플레이어)
 * 플레이어의 경우 게임을 기다린다.
 * 
 * 
 */
  
