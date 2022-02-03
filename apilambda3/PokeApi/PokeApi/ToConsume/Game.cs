using System.Text.Json.Serialization;

namespace PokeApi.ToConsume
{
    public class Game
    {
        [JsonPropertyName("id")]
        public string? Id { get; set; }

        [JsonPropertyName("titulo")]
        public string? Titulo { get; set; }

        [JsonPropertyName("nota")]
        public double? Nota { get; set; }

        [JsonPropertyName("ano")]
        public int? Ano { get; set; }

        [JsonPropertyName("urlImagem")]
        public string? UrlImagem { get; set; }
    }
}
