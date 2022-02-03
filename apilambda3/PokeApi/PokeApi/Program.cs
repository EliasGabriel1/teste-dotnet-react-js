using GamesApi.DTOs.Output;
using GamesApi.Util;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using PokeApi.ToConsume;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "GameAPI", Description = "API responsavel pelo processamento dos games", Version = "v1" });
});

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();

app.MapPost("/TorneioGames", ([FromBody] List<Game> games) => {

    List<Torneio> torneiosLv1 = new List<Torneio>();

    for (int i = 0; i < games.Count;)
    {
        Game winnerStep = GamesUtil.CompareTwoGames(games[i], games[i + 1]);
        torneiosLv1.Add(new Torneio() { Games = new List<Game> { games[i], games[i + 1] }, FaseTorneio = 1, Vencedor = winnerStep });
        i += 2;
    }

    List<Torneio> torneiosLv2 = new List<Torneio>();

    for (int i = 0; i < torneiosLv1.Count;)
    {
        Game winnerStep = GamesUtil.CompareTwoGames(torneiosLv1[i].Vencedor, torneiosLv1[i + 1].Vencedor);
        torneiosLv2.Add(new Torneio() { Games = new List<Game> { torneiosLv1[i].Vencedor, torneiosLv1[i + 1].Vencedor }, FaseTorneio = 2, Vencedor = winnerStep });
        i += 2;
    }

    List<Torneio> torneioFinal = new List<Torneio>();


    for (int i = 0; i < torneiosLv2.Count;)
    {
        Game winnerStep = GamesUtil.CompareTwoGames(torneiosLv2[i].Vencedor, torneiosLv2[i + 1].Vencedor);
        torneioFinal.Add(new Torneio() { Games = new List<Game> { torneiosLv2[i].Vencedor, torneiosLv2[i + 1].Vencedor }, FaseTorneio = 3, Vencedor = winnerStep });
        i += 2;
    }

    return new Resultado { VencedoresL1 = torneiosLv1, VencedoresL2 = torneiosLv2, VencedoresFinal = torneioFinal};
});

app.Run();
