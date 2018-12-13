export class Luar {
  public name: string;
  public tahun: string;
  public genre: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, tahun: string, genre: string, description: string, imagePath: string) {
    this.name = name;
    this.tahun = tahun;
    this.genre = genre;
    this.description = description;
    this.imagePath = imagePath;
  }
}
