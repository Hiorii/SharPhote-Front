import url from './URL';

export function flattenProducts(data){
  return data.map((item)=>{
    let image = item.image.url;
    return {...item, image};
  })
}

export function featureProducts(data){
  return data.filter(product => {
    return product.featured === true;
  });
}


