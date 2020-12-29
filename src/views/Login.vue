<template>
    <main class="main">
	<div class="wrapper">
		<div class="card">
			<div class="title">
				<h1 class="title title-large">{{ $t('Sign In') }}</h1>
				<p class="title title-subs">{{ $t('New User') }} <span><router-link to="/signup"><a class="linktext">{{ $t('New Account') }}</a></router-link></span></p>
			</div>
			<form class="form" @submit.prevent="login">
				<div class="form-group">
					<input type="email" name="email" id="email" class="input-field" :placeholder="$t('Email')" required v-model="username">
				</div>
				<div class="form-group">
					<input type="password" name="password" id="password" class="input-field" :placeholder="$t('Password')" required v-model="password">
				</div>
				<div class="form-group">
					<input type="submit" name="submit" class="input-submit" :value="$t('Sign In')">
				</div>
                <div class="error" v-if="isError">Invalid Username or Password</div>
			</form>
		</div>
	</div>
</main>
</template>
<script>
import authMixin from '../mixins/auth'
export default {
    mixins: [authMixin],
    data(){
        return {
            password: '',
            username: '',
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
$color-white: #ffffff;
$color-black: #252a32;
$color-light: #f1f5f8;
$color-red: #d32f2f;
$color-blue: #148cb8;

$box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);

img {
	display: block;
	width: 100%;
	height: auto;
}

.error{
    text-align: left;
    font-size: 12px;
    color: red;
}

a,
button {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	border: none;
	outline: none;
	background: none;
	text-decoration: none;
}

// Components
.container {
	max-width: 85rem;
	width: 100%;
	height: auto;
	padding: 0 2rem;
	margin: 0 auto;
}

.wrapper {
	max-width: 28rem;
	width: 100%;
	margin: 0 auto;
	padding: 2rem 1.5rem;
}

.card {
	padding: 1.5rem 2rem;
	border: none;
	outline: none;
	border-radius: 4px;
	color: $color-black;
	background: $color-white;
	box-shadow: $box-shadow;
}

.icons {
	font-size: 1.45rem;
	line-height: inherit;
	margin-right: 0.5rem;
	border: none;
	outline: none;
	background: none;

	&-google {
		color: $color-red;
	}
	&-facebook {
		color: darken($color-blue, 10);
	}
	&-apple {
		color: $color-black;
	}
}

.linktext {
	font-family: inherit;
	font-size: 0.95rem;
	line-height: inherit;
	color: $color-blue;
	text-rendering: optimizeLegibility;

	&:hover {
		text-decoration: underline;
	}
}

.title {
	font-family: inherit;
	line-height: inherit;
	text-rendering: optimizeLegibility;

	&-large {
		font-size: 2rem;
		font-weight: 600;
		color: $color-black;
	}

	&-subs {
		font-size: 0.95rem;
		font-weight: 400;
		line-height: inherit;
	}
}

// Main
.main {
	.wrapper {
		.form {
			width: 100%;
			height: auto;
			margin: 2rem 0;

			&-group {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 1rem;

				.input-field {
					font-family: inherit;
					font-size: 0.95rem;
					font-weight: 400;
					line-height: inherit;
					width: 100%;
					height: auto;
					padding: 0.75rem 1.25rem;
					border: none;
					outline: none;
					border-radius: 2rem;
					color: $color-black;
					background: $color-light;
				}

				.input-submit {
					font-family: inherit;
					font-size: 0.95rem;
					font-weight: 500;
					line-height: inherit;
					cursor: pointer;
					padding: 0.65rem 2rem;
					border: none;
					outline: none;
					border-radius: 2rem;
					text-align: center;
					color: $color-white;
					background: $color-blue;
				}
			}
		}

		.line {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-bottom: 1rem;

			&-bar {
				flex: auto;
				flex-basis: auto;
				border: none;
				outline: none;
				height: 1.3px;
				background: darken($color-light, 15);
			}

			&-text {
				font-weight: 500;
				color: $color-black;
				padding: 0 1rem;
			}
		}

		.method {
			&-item {
				margin-bottom: 0.5rem;

				.btn-action {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					font-family: inherit;
					font-size: 0.95rem;
					font-weight: 500;
					line-height: inherit;
					padding: 0.2rem 1rem;
					width: 100%;
					height: auto;
					outline: none;
					border: 1.3px solid darken($color-light, 15);
					border-radius: 2rem;
					color: $color-black;
					background: $color-white;
					transition: all 0.35s ease;

					&:hover {
						background: darken($color-light, 10);
					}
				}
			}
		}
	}
}

</style>