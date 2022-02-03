using PokeApi.ToConsume;

namespace GamesApi.Util
{
    public class GamesUtil
    {
        public static Game CompareTwoGames(Game A, Game B)
        {
            if (A.Nota > B.Nota)
                return A;
            return B;
        }
    }
}
