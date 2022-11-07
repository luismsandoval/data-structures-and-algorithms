export const leftJoin = (map1: Map<any, any>, map2: Map<any, any>): Map<any, any> => {
  const newMap = new Map(map1);
  for (const [key, value] of newMap) {
    if (map2.has(key)) newMap.set(key, [value, map2.get(key)])
    else newMap.set(key, [value, null])
  }
  return newMap;
} 
