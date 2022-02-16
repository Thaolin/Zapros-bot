module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
	

		client.on('interactionCreate', async interaction => {
	
			if (!interaction.isCommand()) return;
		
			const command = client.commands.get(interaction.commandName);
		
			if (!command) return;
		
			try {
				console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		});
	},
};

