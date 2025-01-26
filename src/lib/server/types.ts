export type MdFile = {
  _id: string,
  file_path: string,
  extenstion: string,
  url_path: string,
  filetype: string | null,
  metadata: {
    tags: string[],
    tasks: string[]
  }
};
