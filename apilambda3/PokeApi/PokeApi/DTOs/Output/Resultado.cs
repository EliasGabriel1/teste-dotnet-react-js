namespace GamesApi.DTOs.Output
{
    public class Resultado
    {
        public List<Torneio> VencedoresL1 { get; set; }
        public List<Torneio> VencedoresL2 { get; set; }

        public List<Torneio> VencedoresFinal { get; set; }
    }
}
