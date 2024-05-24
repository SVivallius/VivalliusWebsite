#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER root
WORKDIR /app
EXPOSE 8080
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["VivalliusWebb-API/VivalliusWebb-API.csproj", "VivalliusWebb-API/"]
COPY ["VivalliusWebb-Common/VivalliusWebb-Common.csproj", "VivalliusWebb-Common/"]
COPY ["VivalliusWebb-Server/VivalliusWebb-Server.csproj", "VivalliusWebb-Server/"]
COPY ["VivalliusWebb-Services/VivalliusWebb-Services.csproj", "VivalliusWebb-Services/"]
RUN dotnet restore "./VivalliusWebb-API/./VivalliusWebb-API.csproj"
COPY . .
WORKDIR "/src/VivalliusWebb-API"
RUN dotnet build "./VivalliusWebb-API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./VivalliusWebb-API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VivalliusWebb-API.dll"]