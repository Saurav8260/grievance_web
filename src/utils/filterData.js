export const filterData = (data, filters) => {
  return data.filter((item) => {
    return (
      item.block.toLowerCase().includes(filters.block.toLowerCase()) &&
      item.gp.toLowerCase().includes(filters.gp.toLowerCase()) &&
      item.village.toLowerCase().includes(filters.village.toLowerCase()) &&
      item.ward.toLowerCase().includes(filters.ward.toLowerCase()) &&
      item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      item.contact.toLowerCase().includes(filters.contact.toLowerCase())
    );
  });
};
