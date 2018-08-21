
export default {
  loading: false,
  page: 5,
  totalCount: 0,
  pages: [] as IPage[],
  licenseValue: -1,
  searchValue: 'tetris+language:assembly',
  starValue: '',
  includeForked: false,
  searchResults: []
};

export interface IPage {
  id: number;
  page: number|null;
  active: boolean;
}