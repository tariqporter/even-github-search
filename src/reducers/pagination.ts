import { IPage } from "./initialState";

export function createPagination(page: number, pageSize: number, totalCount: number): IPage[] {
  let index = 0;
  const pages = [{ id: index++, page: 1 }] as IPage[];
  const pageCount = Math.ceil(totalCount / pageSize);
  for(let i = page - 2; i <= page + 2; i++) {
    const existingPage = pages.find(x => x.page === i);
    if (!existingPage && i > 1 && i < pageCount) {
      const lastPage = pages[pages.length - 1].page;
      const hasGap = lastPage !== null && i > lastPage + 1;
      if (hasGap) {
        pages.push({ id: index++, page: null, active: false });
      }
      pages.push({ id: index++, page: i, active: i === page });
    }
  }
  const lastPageEnd = pages[pages.length - 1].page;
  const hasGapEnd = lastPageEnd !== null && pageCount > lastPageEnd + 1;
  if (hasGapEnd) {
    pages.push({ id: index++, page: null, active: false });
  }
  pages.push({ id: index++, page: pageCount, active: pageCount === page });
  return pages;
}