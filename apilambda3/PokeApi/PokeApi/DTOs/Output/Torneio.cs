using PokeApi.ToConsume;

namespace GamesApi.DTOs.Output
{
    public class Torneio
    {
        public int FaseTorneio { get; set; }
        public List<Game>? Games { get; set; }

        public Game? Vencedor { get; set; }
    }
}
