const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function getTags(tags) {
  console.log(tags)
  return "getTags function";
}
