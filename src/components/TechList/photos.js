const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    src: `https://picsum.photos/id/${i}/200/100`,
    thumbnail: `https://picsum.photos/id/${i}/200/100`,
    header: Math.ceil(Math.random() * 100).toString(),
    footer: new Date(Math.floor(Math.random() * 100000000)).toDateString(),
  });
}
export default data;
